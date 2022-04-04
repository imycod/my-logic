// 增加前缘触发功能
const debounce = (fn, wait, immediate = false) => {
  let timer, startTimeStamp = 0;
  let context, args;

  let run = (timerInterval) => {
    timer = setTimeout(() => {
      let now = (new Date()).getTime();
      let interval = now - startTimeStamp
      if (interval < timerInterval) { // the timer start time has been reset，so the interval is less than timerInterval
        console.log('debounce reset', timerInterval - interval);
        startTimeStamp = now;
        run(wait - interval);  // reset timer for left time 
      } else {
        if (!immediate) {
          fn.apply(context, args);
        }
        clearTimeout(timer);
        timer = null;
      }

    }, timerInterval);
  }

  return function () {
    context = this;
    args = arguments;
    let now = (new Date()).getTime();
    startTimeStamp = now; // set timer start time

    if (!timer) {
      console.log('debounce set', wait);
      if (immediate) {
        fn.apply(context, args);
      }
      run(wait);    // last timer alreay executed, set a new timer
    }

  }
}

export function importModule(moduleName, module, ...params) {
  const paramArray = params ? params.concat(importModule) : [importModule]
  console.log(this instanceof builder);
  this[moduleName] = module.call(this, ...paramArray);
  return this[moduleName]
}


export function GeneratorRun(gen) {
  const it = gen()
  function next(data) {
    const result = it.next(data)
    if (result.done) return result.value
    if (result.value instanceof Promise) {
      result.value.then(data => next(data))
    } else {
      throw new TypeError('You can only yield a promise')
    }
  }
  next()
}

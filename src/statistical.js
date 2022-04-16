// 找到所有dom中排序前n个
export function getTopDom(n = 3) {
  const elements = Array.from(document.getElementsByTagName('*'))
  const count = {}
  for (const el of elements) {
    el.tagName && (count[el.tagName] = (count[el.tagName] || 0) + 1)
  }
  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1])
  const top = sorted.slice(0, n)
  return top.map(i => i[0])
}


export function getTopDom(html, n = 3) {
  html = html || document.querySelector('html')
  const count = {}
  function scan(parent) {
    parent.tagName && (count[parent.tagName] = (count[parent.tagName] || 0) + 1)
    for (const el of parent.children) {
      scan(el)
    }
  }
  scan(html)
  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1])
  const top = sorted.slice(0, n)
  return top.map(i => i[0])
}

export default function System () { }

System.arraycopy = (src, srcPos, dest, destPos, len) => {
  let c = 0
  for (let i = srcPos; i < srcPos + len; i++) {
    dest[destPos + c] = src[i]
    c++
  }
}

System.getProperty = (name) => {
  return {
    'line.separator': '\n'
  }[name]
}

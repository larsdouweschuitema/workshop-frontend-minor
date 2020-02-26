export default function(data, { key, value }) {
  return data.filter(item => item[key] = value)
}

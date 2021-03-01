function set(key, value) {
  try {
    localStorage.setItem(key, value.toString())
  } catch (error) {
    return null
  }
}

function getBoolean(key) {
  try {
    return localStorage.getItem(key) === "true"
  } catch (error) {
    return null
  }
}

function getString(key) {
  try {
    return localStorage.getItem(key)
  } catch (error) {
    return null
  }
}

function getNumber(key) {
  try {
    return Number(localStorage.getItem(key))
  } catch (error) {
    return null
  }
}

export default {
  set,
  getBoolean,
  getString,
  getNumber,
}

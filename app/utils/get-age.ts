export const getAge = () => {
  const birthday = new Date(2001, 1, 11)
  const today = new Date()
  const age = today.getFullYear() - birthday.getFullYear()
  const month = today.getMonth() - birthday.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    return age - 1
  }
  return age
}

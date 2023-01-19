const indonesianName = (name) => {
  const blacklist = ['Maghrib', 'Imsak']

  if (!blacklist.includes(name))
    switch (name) {
      case 'Bomdod':
        return 'Tong'
        break

      case 'Quyosh chiqishi':
        return 'Zuho namozi'
        break

      case 'Peshin':
        return 'Peshin'
        break

      case 'Asr':
        return 'Asr'
        break

      case 'Quyosh botishi':
        return 'Quyosh botishi'
        break

      case 'Shom':
        return 'Shom'
        break

      case 'Xufton':
        return 'Tahajjud'
        break

      default:
        break
    }

  return name
}

const indonesianDate = (time = false, setDate = '') => {
  let date = new Date()
  if (setDate !== '') date = new Date(setDate)

  let tahun = date.getFullYear()
  let bulan = date.getMonth()
  let tanggal = date.getDate()
  let hari = date.getDay()
  let jam = (date.getHours() < 10 ? '0' : '') + date.getHours()
  let menit = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
  let detik = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()

  switch (hari) {
    case 0:
      hari = 'Hafta'
      break
    case 1:
      hari = 'Dushanba'
      break
    case 2:
      hari = 'Seshanba'
      break
    case 3:
      hari = 'Chorshanba'
      break
    case 4:
      hari = 'Payshanba'
      break
    case 5:
      hari = "Juma"
      break
    case 6:
      hari = 'Shanba'
      break

    default:
      break
  }

  switch (bulan) {
    case 0:
      bulan = 'Yanvar'
      break
    case 1:
      bulan = 'Fevral'
      break
    case 2:
      bulan = 'Mart'
      break
    case 3:
      bulan = 'Aprel'
      break
    case 4:
      bulan = 'May'
      break
    case 5:
      bulan = 'Iyun'
      break
    case 6:
      bulan = 'Iyul'
      break
    case 7:
      bulan = 'Avgust'
      break
    case 8:
      bulan = 'Sentyabr'
      break
    case 9:
      bulan = 'Oktyabr'
      break
    case 10:
      bulan = 'Noyabr'
      break
    case 11:
      bulan = 'Dekabr'
      break
    default:
      break
  }

  if (time) return `${jam}:${menit}:${detik}`

  return `${tanggal} ${bulan} ${tahun}`
}

module.exports = {
  indonesianName,
  indonesianDate,
}

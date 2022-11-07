export const queues = {
  request: {
    label: 'Запись в клинику',
    code: 1
  },
  consultation: {
    label: 'Онлайн консультация',
    code: 2
  },
  help: {
    label: 'Чат поддержки',
    code: 3
  }

}

export const statuses = {
  New: 'Новая',
  InProgress: 'В процессе',
  InContact: 'Контакт с клиентом',
  Canceled: 'Завершена'
}

/**
 * Организует поиск индексов вхождения подстроки в строку
 * @param str - строка
 * @param substr - подстрока
 * @param caseSensetive - флаг учета регистра
 * @returns {*[]}
 */
export const searchSubstrings = (str = '', substr = '', caseSensetive = false) => {
  const searchedIndexes = []

  if (!str || !substr) return searchedIndexes

  let pos = -1
  const string = !caseSensetive ? str.toLowerCase() : str
  const subString = !caseSensetive ? substr.toLowerCase() : substr

  while ((pos = string.indexOf(subString, pos + 1)) !== -1) {
    searchedIndexes.push(pos)
  }

  return searchedIndexes
}

/**
 * Используется для рендеринга строки, исходя из данных о вхождениях подстроки
 * @param string - строка
 * @param substring - подстрока
 * @param searchedData - массив индексов вхождения подстрок
 * @returns {[{searched: boolean, start: number, end: number}]} массив для конкретного рендеринга
 */
export const computeDataForStringWithSearch = (string, substring, searchedData = []) => {
  /**
   * микрооптимизация
   */
  if (!string) {
    return []
  }
  if (!searchedData.length || !substring) {
    return [{
      start: 0,
      end: string.length,
      searched: false
    }]
  }

  const result = []

  /**
   * Текущий индекс в строке
   */
  let i

  /**
   * Индексы начала и конца подстроки, не входящей в поиск
   */
  let start = 0; let end = 0

  for (i = 0; i < string.length; i++) {
    if (!searchedData.includes(i)) {
      end = i
      if (i + 1 === string.length) {
        result.push({
          start,
          end,
          searched: false
        })
      }
    } else {
      if (end >= start && i > end) {
        result.push({
          start,
          end,
          searched: false
        })
      }
      result.push({
        start: i,
        end: i + substring.length - 1,
        searched: true
      })
      start = i + substring.length
      end = start
      i = start - 1
    }
  }

  return result
}

export function debounce (fn, delay) {
  let timer = null
  return function () {
    const context = this; const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

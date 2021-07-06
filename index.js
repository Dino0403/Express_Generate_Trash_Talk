function sample(input) {
  let randomIndex = Math.floor(Math.random() * input.length)
  return input[randomIndex]
}

function generateFunckWord(option) {
  if (!option) {
    return '請選擇一個職業'
  }
  // 設定選項
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  // 設定假資料
  // const option = {
  //   title: 'entrepreneur'
  // }

  // 放入使用者的選項
  if (option === 'engineer') {
    return `身為一個工程師，${sample(task.engineer)}，${sample(phrase)}吧`
  }

  if (option === 'desinger') {
    return `身為一個設計師，${sample(task.designer)}，${sample(phrase)}吧`
  }

  if (option === 'entrepreneur') {
    return `身為一個企業家，${sample(task.entrepreneur)}，${sample(phrase)}吧`
  }
}

module.exports = generateFunckWord
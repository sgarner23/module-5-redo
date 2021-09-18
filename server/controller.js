const fortuneArr = ["If you eat something & nobody sees you eat it, it has no calories.", "You don't have to be faster than the bear, you just have to be faster than the slowest guy running form it", "If you think I can sum up your life on this little website you're crazy", "I see money in your future it is not yours though", "Three can keep a secret, if you get rid of two", "If you think nobody cares if you are alive, try missing a couple of car payments."]

const myZodiacSign = "Aries"

const resetStrategies = []


function sendFortune (req, res) {
  let randomNum = Math.floor(Math.random() * fortuneArr.length);
  console.log(fortuneArr[randomNum])
  res.status(200).send(fortuneArr[randomNum])

}

function getStephensZodiacSign (req, res) {
  res.status(200).send(myZodiacSign)
}

function addReset(req, res) {
  console.log(req.body)
  const { value } = req.body
  console.log(value)
  resetStrategies.push(value)
  res.status(200).send('Entry recorded successfully')
}

function sendResetsArr(req, res) {
  console.log(resetStrategies)
  res.status(200).send(resetStrategies)
}

module.exports = {
  sendFortune,
  getStephensZodiacSign,
  addReset,
  sendResetsArr

}
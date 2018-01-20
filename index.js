function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  return console.log(string.toUpperCase())
}

function logWhisper (string) {
  return console.log(string.toLowerCase())
}

function sayHiToGrandma (string) {
  if (true) {
    var string === string.lowercase
    var string === string.uppercase
    var string === "I love you, Grandma."
  }
  then
    return ("I can't hear you!")
    return ("YES INDEED")
    return ("I love you, too.")
}


describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})

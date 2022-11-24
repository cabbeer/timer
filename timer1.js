let alarms = process.argv.slice(2)


// PLEASE READ, the else if statement prevents a string from being set as an alarm
// This is because the alarm is a string which gets read as a number so adding strings to the if
// statement would prevent the alarn from getting set in the first place.

/// OMG javascript changing types gets very anoying
for (let alarm of alarms) {
  //Edge cases
  if (alarm == 0 || alarm < 0 || typeof alarm == NaN) {
    continue
  }else if (alarm > 0) {
    console.log(`You have set an alarm for ${alarm} seconds`)
  setTimeout(() => {
    console.log(`This is your ${alarm} second alarm:`)
    console.log('ALARM NOISE! ALARM NOISE! ALARM NOISE!')
  }, alarm * 1000);
  }

}

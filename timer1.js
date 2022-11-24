let alarms = process.argv.slice(2)

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

function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}
saveToDb(
  "Apna College",
  () => {
    console.log("success 1: Your data was saved ");
    saveToDb(
      "Hello world",
      () => {
        console.log("Success 2 : Data 2 was saved");
        saveToDb(
          "Jaiki",
          () => {
            console.log("success 3 : data 3 saved");
          },
          () => {
            console.log("Failure 3 data was not saved week connection");
          }
        );
      },
      () => {
        console.log("failure 2 week connection");
      }
    );
  },
  () => {
    console.log("Week connection data not saved");
  }
);

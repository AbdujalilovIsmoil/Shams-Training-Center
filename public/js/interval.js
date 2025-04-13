const teacher = document.getElementById("teacher");
const readStudent = document.getElementById("read");
const middleStudent = document.getElementById("middle");
const successStudent = document.getElementById("success");

const intervalResult = (tag, count, second) => {
  let index = 0;
  const ineterval = setInterval(() => {
    index += second;
    tag.innerHTML = `+${index}`;

    if (index === count) {
      clearInterval(ineterval);
    }
  }, second);
};

intervalResult(readStudent, 1700, 10);
intervalResult(successStudent, 70, 1);
intervalResult(middleStudent, 1000, 10);
intervalResult(teacher, 12, 1);

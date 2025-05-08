function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
      currentSum += num;
      if (currentSum > maxSum) maxSum = currentSum;
      if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
  }

  function handleMaxSubSum() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
    
    const result = getMaxSubSum(arr);
    document.getElementById("result").innerHTML = `Максимальна сума підмасиву: <strong>${result}</strong>`;
  }
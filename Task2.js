function runOperations() {
    const output = document.getElementById('output');
    let log = "";

    // 1. Створення масиву
    let styles = ["Jazz", "Blues"];
    log += "1. " + JSON.stringify(styles) + "\n";

    // 2. Додаємо "Rock-n-Roll"
    styles.push("Rock-n-Roll");
    log += "2. " + JSON.stringify(styles) + "\n";

    // 3. Замінюємо середній елемент на "Classics"
    let middleIndex = Math.floor(styles.length / 2);
    styles[middleIndex] = "Classics";
    log += "3. " + JSON.stringify(styles) + "\n";

    // 4. Видаляємо перший елемент і показуємо його
    let first = styles.shift();
    log += "4. " + JSON.stringify(styles) + "\n";

    // 5. Вставляємо Rap та Reggae на початок
    styles.unshift("Rap", "Reggae");
    log += "5. " + JSON.stringify(styles) + "\n";

    output.textContent = log;
  }
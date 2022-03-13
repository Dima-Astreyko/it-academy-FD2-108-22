function createPhoneNumber(numbers){
    let phone = "(nnn) nnn-nnnn";
    for (let i = 0; i < numbers.length; i++) {
      phone = phone.replace('n', numbers[i]);
    }
    return phone;
}
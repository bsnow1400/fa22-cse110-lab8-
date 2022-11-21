// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('isPhoneNumber all 1s TRUE', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('isPhoneNumber parentheses TRUE', () => {
    expect(functions.isPhoneNumber('(111) 111-1111')).toBe(true);
});

test('isPhoneNumber too short FASLE', () => {
    expect(functions.isPhoneNumber('11-1111')).toBe(false);
});

test('isPhoneNumber no formatting FASLE', () => {
    expect(functions.isPhoneNumber('1111111111')).toBe(false);
});


// isEmail
test('isEmail all 1s TRUE', () => {
    expect(functions.isEmail('111@gmail.com')).toBe(true);
});

test('isEmail character TRUE', () => {
    expect(functions.isEmail('something@gmail.com')).toBe(true);
});

test('isEmail no @ FALSE', () => {
    expect(functions.isEmail('111gmail.com')).toBe(false);
});

test('isEmail invalid domain FALSE', () => {
    expect(functions.isEmail('111@gmail.111')).toBe(false);
});


// isStrongPassword
test('isStrongPassword random password TRUE', () => {
    expect(functions.isStrongPassword('I6p62s0K5rpX')).toBe(true);
});

test('isStrongPassword only letters TRUE', () => {
    expect(functions.isStrongPassword('aaaaaaaaaaaa')).toBe(true);
});

test('isStrongPassword starts with number FALSE', () => {
    expect(functions.isStrongPassword('1aaaaaaaaaaa')).toBe(false);
});

test('isStrongPassword only 3 characters', () => {
    expect(functions.isStrongPassword('aaa')).toBe(false);
});

// isDate
test('isDate one char long TRUE', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});

test('isDate two char long TRUE', () => {
    expect(functions.isDate('11/11/1111')).toBe(true);
});

test('isDate wrong format FALSE', () => {
    expect(functions.isDate('1-1-1111')).toBe(false);
});

test('isDate year too short FALSE', () => {
    expect(functions.isDate('1/1/11')).toBe(false);
});


// isHexColor
test('isHexColor short 1 TRUE', () => {
    expect(functions.isHexColor('#111')).toBe(true);
});

test('isHexColor long 1 TRUE', () => {
    expect(functions.isHexColor('#111111')).toBe(true);
});

test('isHexColor too short FALSE', () => {
    expect(functions.isHexColor('#11')).toBe(false);
});

test('isHexColor too long FALSE', () => {
    expect(functions.isHexColor('#1111111')).toBe(false);
});
console.log('Hey, this is my first JS program. Go dance!')


/* 
1) 'number' + 23 + 32
1.1 'number' + 23 = 'number23'
1.2 'number23' + 32 = 'number2332'
1.3 'number2332' - result 
 
2) 41 + 1 + 'number'
2.1 41 + 1 = 42
2.2 42 + 'number' = '42number'
2.3 '42number' - result 

3) null + 1
3.1 null = 0
3.2 0 + 1 = 1
3.3 1 - result

4) 'five' + + 'two'
   'five' + +'two'
4.1   +'two' - не приведе до number, тому буде помилка (значення) - NaN
4.2   'five' + NaN = 'fiveNaN' - оператор + приведе в строку
4.3   fiveNaN' - result

5) 2 && 7
5.1 2 - true
5.2 7 - false
5.3 && обере false
5.4 7 - result

6) +'40' + +'2';
6.1 +'40' = 40  
6.2 +'2' = 2
6.3 40 + 2 = 42
6.4 42 -result

7) '10' - 5 === 6;
7.1 '10' = 10 (number)
7.2 10 - 5 = 5
7.3 5 === 6 = false (not equal and not same types)
7.4 false - result

8) true + false
8.1 true = 1
8.2 false = 0
8.3 1 + 0 = 1
8.4 1 - result

9) '4px' - 3
оскільки ми маємо мінус, то це обов'язкове приведення до number,
а оскільки ліву частину привести не можна, то отримаємо помилку (значення NaN) 

10) '2' + 3 ** 2;
10.1 3**2 = 9
10.2 '2' + 9 = '29'
10.3 29 - result

11) 12 / '6'
11.1 '6' = 6 (number)
11.2 12 / 6 = 2
11.3 2 - result

12) 23 + 42 + 'number'
12.1 23 + 42 = 65
12.2 65 + 'number' = '65number'
12.3 '65number' - result

13) '10' + (5 === 6);
13.1 5 === 6 = false (not equal and not same types)
13.2 '10' + false
13.3 '10false' - result

14) 'number' + 15 + 3
14.1 number' + 15 = 'number15'
14.2 'number15' + 3 = 'number153'
14.3 'number153' - result



15) undefined + 1;
хоч ми і маємо плюс, але ліва частина не визначена, тому 
немає до чого додавати то отримаємо помилку (напевно NaN) ? 

16) 'true' == true
    == - здійснює перевірку на значення
 true = 1
 'true' - string
 'true' == 1
 
 false - result

   - false == 'false'
      false = 0
      'false' - string
      0 == 'false' 
    
    false - result

17) null == ''
    '' = 0


18) 3 ** (9 / 3);
    9 / 3 = 3
    3**3 = 27
    27 - result

19) !!'false' == !!'true'
    !'false' = false
    !false = true

    !'true' = false
    !false = true

    true == true
    true - result 

20) 0 || '0' && 1
    '0' && 1 = 1 (ліву частину не може перетворити тому автоматично повертає праву)
     0 || 1 = 1 (оператор || повертає частину де true)
     1 - result

21) 1 < 2 < 3
    1 < 2 - true
    2 < 3 - true
    true - result

22) 'foo'+ + +'bar'
    +'bar' - привести явно за допомогою + не вийде, буде - NaN
    'foo'+ - буде та ж строка - 'foo'
    'foo' + NaN = 'fooNaN'
    'fooNaN' - result - + перетворить NaN на строку

23) 3 ** 2 / 3;
    3 ** 2 = 9
    9 / 3 = 3
    3 - result

24) 1 < 2 > 3
    1 < 2 - true
    2 > 3 - false
    оскільки false останнє, це і буде результат

25) (+null == false) < 1;
    +null = 0
    0 == false (0) = true
    true < 1 = false
    false - result

26) false && true || true
    false && true = false
    false || true = true
    result - true

27) false && (true || true);
    true || true = true
    false && true = false
    false - result

28) (+null == false) < 1 ** 5;
     0 == false (0) = true
     1**5 = 1 
     true < 1 = false (1 < 1)
     false - result

     */

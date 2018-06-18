describe('String', function() {
	describe('Methods and properties', function() {
		it('Получение длинны строки', function() {
			var str = 'Denis'
			expect(typeof str.length).toBe('number');
		});
		it('Доступ к символам', function() {
			var str = 'Denis',
				letter = 1
			expect(typeof str.charAt(letter)).toBe('string');
			//expect(str[0].toBe('D'); 
			//Error during loading: Uncaught SyntaxError: missing ) after argument list
			expect(''.charAt(letter) === '').toBeTruthy();
			//expect('' [0] === '').toBeUndefined(); //- не работает [] ?
		});
		it('Смена регистра', function() {
			var den = 'Denis'
			expect(den.toUpperCase()).toBe('DENIS');
			expect(den.toLowerCase()).toBe('denis');
			expect(den.toLowerCase()).toContain('denis');
		});
		it('Поиск подстроки', function() {
			var pstr = 'Denis is the best'
			expect(typeof pstr.indexOf('is')).toBe('number');
			expect(pstr.indexOf('is') === 3).toBeTruthy();
			expect(pstr.lastIndexOf('is') === 6).toBeTruthy();
			expect(pstr.indexOf('is', 9) === -1).toBeTruthy();
		});
		it('Поиск всех вхождений', function() {
			var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
			var target = "Иа"; // цель поиска
			var pos = -1;

			spy = jasmine.createSpy('spy');

			while ((pos = str.indexOf(target, pos + 1)) != -1) {
				spy(pos);
			}

			expect(spy.calls.count()).toBe(2);
			expect(spy).toHaveBeenCalledWith(6);
			expect(spy).toHaveBeenCalledWith(9);
		});
		it('Взятие подстроки: substring, substr, slice', function() {
			var sstr = 'Denis is the best'
			expect(typeof sstr.substring(0, 1)).toBe('string');
			expect(sstr.substring(0, 1)).toBe('D');
			expect(sstr.substring(13)).toBe('best');
			expect(sstr.substr(0, 3)).toBe('Den');
			expect(sstr.substring(-3) === sstr.substring(0)).toBeTruthy();
			expect(sstr.slice(0, -12)).toBe('Denis');
		});
	});
	describe('Кодировка Юникод', function() {
		it('Все строки имеют внутреннюю кодировку Юникод', function() {
			expect('а' > 'Я').toBeTruthy();
			expect('ё' > 'я').toBeTruthy();
			expect(String.fromCharCode(97) === 'a').toBeTruthy();
			expect(typeof String.fromCharCode(97)).toBe('string');
			expect('Den'.charCodeAt(0)).toBe(68);
			expect(typeof 'Den'.charCodeAt(0)).toBe('number');
		});
		it('Посимвольное сравнение', function() {
			expect('Денис' < 'Диван').toBeTruthy();
			expect('Денис' > 'Вешалка').toBeTruthy();
		});
		it('Правильное сравнение', function() {
			var unic = 'Денис'
			expect(unic.localeCompare("Диван")).toBe(-1);
			expect(unic.localeCompare("Вешалка")).toBe(1);
		});
	});
});
describe('Number', function () {

    describe('Infinity', function () {
        it('деление на ноль вернет Infinity', function () {
            expect(1 / 0).toBe(Infinity);
        });

        it('деление на ноль отрицательного числа вернет -Infinity', function () {
            expect(-1 / 0).toBe(-Infinity);
        });

        it('Infinity и -Infinity не равны', function () {
            expect(Infinity).not.toBe(-Infinity);
        });

        it('Infinity равно самому себе', function () {

            expect(Infinity).toBe(Infinity);
            expect(-Infinity).toBe(-Infinity);
        });

        it('число больше 64bit вернет Infinity', function () {
            expect(1E500).toBe(Infinity);
        });
    });

    describe('NaN (Not-A-Number)', function () {

        it('если значение нельзя вычеслить то мы получаем NaN', function () {
            expect(0 / 0).toBeNaN();
            // expect(0 / 0).toBe(NaN); не будет работать!
        });

        it('NaN не равен ничему, даже себе', function () {
            expect(NaN == NaN).toBeFalsy();
            expect(NaN === NaN).toBeFalsy();
            expect(NaN).not.toBe(NaN);
        });

        it('специальная функция isNaN', function () {
            expect(isNaN(NaN)).toBeTruthy();
            expect(isNaN("NaN")).toBeTruthy();
            expect(isNaN(1)).toBeFalsy();
        });

        it('любые операции с NaN вернут NaN', function () {
            expect(NaN + 1).toBeNaN();
            expect(NaN * 5).toBeNaN();
            expect(NaN / 0).toBeNaN();
            expect(30 - NaN).toBeNaN();
            // и тд.
        });
    });

    it('функция isFinite должа вернуть true если аргумент простое число', function () {
        expect(isFinite(1)).toBeTruthy();
        expect(isFinite(Infinity)).toBeFalsy();
        expect(isFinite(-Infinity)).toBeFalsy();
        expect(isFinite(NaN)).toBeFalsy();
        expect(isFinite(1E500)).toBeFalsy();
    });

    describe('Преобразование к числу', function () {
        it('унарный +', function () {
            expect(+ "987.654").toBe(987.654);
            expect(+ "987.654test").toBeNaN();
            expect(+ "-987.654").toBe(-987.654);
            expect(+ "- 987.654").toBeNaN();
            expect(+ "").toBe(0);
            expect(+ "\n\t 987.654 \n").toBe(987.654);

            expect("4" / "2").toBe(2);
            expect("4" * "2").toBe(8);
            expect("4" - "2").toBe(2);

            expect("4" + "2").not.toBe(6);
        });
    });
});

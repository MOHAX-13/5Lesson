describe('Object', function () {
    it('craete object', function () {
        expect(typeof {}).toBe('object');
        expect(typeof new Object).toBe('object');
    });

    it('создание, получение и удаление свойств', function () {
        var object = {},
            keyCity = 'city';

        expect(object).toEqual({});

        object.name = 'Maksim';

        expect(object).toEqual({name: 'Maksim'});

        object['age'] = 25;

        expect(object).toEqual({name: 'Maksim', age: 25});

        object[keyCity] = 'grodno';

        expect(object).toEqual({city: 'grodno', name: 'Maksim', age: 25});

        object.test = 'testValue';

        expect(object).toEqual({test: 'testValue', city: 'grodno', name: 'Maksim', age: 25});

        object.test = undefined;

        expect(object).not.toEqual({city: 'grodno', name: 'Maksim', age: 25});
        expect(object).toEqual({test: undefined, city: 'grodno', name: 'Maksim', age: 25});

        delete object.test;

        expect(object).toEqual({city: 'grodno', name: 'Maksim', age: 25});

        delete object['age'];

        expect(object).toEqual({city: 'grodno', name: 'Maksim'});

        expect(object.name).toBe('Maksim');
        expect(object['name']).toBe('Maksim');

        expect(object.city).toBe('grodno');
        expect(object[keyCity]).toBe('grodno');
    });

    it('разница между проверками in и === undefined', function () {
        var object = {};

        object.name = 'Maksim';

        expect('name' in object).toBeTruthy();
        expect(object.name !== undefined).toBeTruthy();

        object.name = undefined;

        expect('name' in object).toBeTruthy();
        expect(object.name === undefined).toBeTruthy();

        delete object.name;

        expect('name' in object).toBeFalsy();
        expect(object.name === undefined).toBeTruthy();
    });

    it('доступ к свойству через переменную', function () {
        var object = {
                name: 'Maksim',
                age: 25
            },
            key;

        key = 'name';

        expect(object[key]).toBe('Maksim');

        key = 'age';

        expect(object[key]).toBe(25);
    });

    it('компактное представление объектов', function () {
        var object = {
                name: 'Maksim',
                age: 25
            },
            otherObject = {};

            expect(object).not.toEqual(otherObject);

            otherObject.name = 'Maksim';
            otherObject.age = 25;
            expect(object).toEqual(otherObject);
    });

    it('цикл for..in', function () {
        var object = {
                name: 'Maksim',
                age: 25
            },
            spy = jasmine.createSpy('spy');

        for (var key in object) {
            spy(key);
        }

        expect(spy.calls.count()).toBe(2);
        expect(spy).toHaveBeenCalledWith('name');
        expect(spy).toHaveBeenCalledWith('age');
    });

    it('передача по ссылке', function () {
        var value = {},
            otherValue = {};

        expect(value).not.toBe(otherValue);

        otherValue = value;

        expect(value).toBe(otherValue);
    });
});
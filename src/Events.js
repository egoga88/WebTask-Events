export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.append(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;

        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });

        ul.append(li);
    });

    document.body.append(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    link.addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            link.textContent += ` ${link.href}`;
        },
        { once: true },
    );

    document.body.append(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const initialLi = document.createElement('li');
    initialLi.textContent = 'Пункт';
    ul.append(initialLi);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });

    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.append(newLi);
    });

    document.body.append(ul, button);
}

# Виджет: Калькулятор 

![2022-09-17_22-53-54](https://user-images.githubusercontent.com/83783362/190874309-931ac8c5-5cc5-4946-b862-1192fb3a3d3d.png)

## Описание

Моя одна из первых работ в веб-разработке :mortar_board: :mortar_board:

Данная страница разделена на 2 части по функционалу и контенту:
* Первая: информативная часть о блоках с текущей информацией о валютах
* Вторая: калькулятор расчета валют

## Реализация и технологии в проекте

* Для написания структуры стилей использовалась БЭМ методология
* Использовалась стилевая библиотека HTML Bootstrap 5

### Реализация первой части

В качестве основы реализации виджета об информации о каждой валюте, использовался комбинированный бейдж Bootstrap 5 с миниатюрой страны отображаемой
валюты и динамического шаблона с текстом.
Информация в бейдже включает в себя:
* USD - обозначение текущей валюты
* Наименование валюты
* Комбинированная строка состоящая из:
 1) Если курс к рублю поднялся отображается красный треугольник, опустился - зеленый
 2) Текущий курс с пояснительным выделением, согласно отображению цвета треугольника
 3) Предыдущий курс
* Разница между текущим курсом и курсом на вчера
* Изменение курса в процентном соотношении
* Дата на которую курс актуален

![2022-09-17_23-29-58](https://user-images.githubusercontent.com/83783362/190875877-bb3c00e2-b9f4-414b-b548-9135e6810eeb.png)

Всего отображено 9 блоков для: Доллара, Евро, Австралийского доллара, Британского фунта, Белорусского рубля, Гонконгского доллара, Китайского юаня,
Индийских рупий, Канадского доллара

### Реализация второй части

Вторая часть - блок с конвертером валют. 
При выборе исходной валюты и конвертируемой с указанием количества происходит мнгновенный пересчет с отображением результатов в соответствующих
тематических блоках **Отдаю**, **Получаю**

![Запись экрана 2022-09-17 в 23 55 47](https://user-images.githubusercontent.com/83783362/190876245-ccc87fb3-be64-4818-b809-a08572268f14.gif)

В качестве запроса к бэкенду использовался нативный API JS fetch.
Данные с бэкенда приходят в виде json строки с ресурса: [Курсы валют ЦБ РФ в XML](https://www.cbr-xml-daily.ru/)

### Технологии

<p>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-plain-wordmark.svg" title="Bootstrap" alt="Bootstrap" width="40" height="40"/>&nbsp;
</p>

## Установка, настройка
Проект, развернутый на Github:  [GitHub Pages](https://vladislavserkir.github.io/calcrates/)

## Написать мне
[![github](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github)](https://github.com/VladislavSerKir)
[![telegram](https://img.shields.io/badge/Telegram-68c4f0?style=for-the-badge&logo=telegram)](https://t.me/vl_kireev)

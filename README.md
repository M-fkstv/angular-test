## Описание проекта

Простое одностраничное приложение, созданное на Angular 18, выполняющее простейшие CRUD операции с помощью JSON-server:
чтение, создание, редактирование, удаление.

С помощью Angular Material реализованы простейшая форма для создания страны, компонент для вывода списка стран, с возможностью редактирования и удаления страны.

При первой загрузке выполняется вывод списка стран-соседей Беларуси.

## Запуск проекта

Для запуска проекта выполните команду `ng serve`. Перейдите в брузере по адресу `http://localhost:4200/`

## Запуск JSON-server

Для запуска JSON-server выполните команду `npx json-server --watch db.json --port 4000`. Перейдя в брузере по адресу `http://localhost:4000/` Вы увидите пустой массив, в дальнейшем в него будут добавляться наши страны.

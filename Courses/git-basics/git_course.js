git config --global user.name "Your Name" //сменить имя пользователя
git config --global user.email youremail@example.com //сменить имейл пользователя

////////////////////////
1. создал Git Remote Repo (RR) //создаем Гит репозиторий на сайте
2. создал GIt Local Repo (LR) //создаем папку на компе где храним проект
3. через VS code открыл LR
4. через VS Terminal сделал 'git init' //инициализация локальной папки как Локального Git Repo
5. связать LR с конкретным RR 'git remote add origin https://github.com/Venrair/Courses.git' //теперь то что делается в LR можно пушить в RR
6. 'git status' // покажет в какой локальной Бранче мы и какие локальные файлы менялись

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

7. выбрать файлы или папки которые добавятся в commit 'git add'
   ' git add . ' // добавить в камит ВСЁ что в папке в которой ты находишься
   ' git add git-basics js-basics ' // добавить в камит две папки которые в папке в которой ты находишься (LR)
8. делаем камит 'git cammit -m 'some changes'' // камит хранится на LR и пока в RR не улетает
9. шлем камит в RR 'git push origin Courses' //Courses это ветка на RR куда будем лить







'BRANCH'

local
//common
git status // Показать ветку, в которой вы находитесь
git branch // Просмотр всех веток
git checkout <branch-name> // переключиться на ветку
git branch -m <new-branch-name> // Переименование текущей ветки

//create
git branch <branch-name> // создать новую ветку Ex. -- git branch test
git checkout -b <branch-name> // Создание и переключение на новую ветку

//delete
git branch -d <branch-name> //Удаление локальной ветки
git branch -D <branch-name> //Принудительное удаление локальной ветки

Remote

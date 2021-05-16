import React from 'react'
import { useSelector } from 'react-redux'
import {Route,Link} from 'react-router-dom';
import './Commands.css'


function Commands() {
    const isAuth = useSelector(state => state.user.isAuth)

    return(
        <div className='command_main'>
             <div className="header">
                    <div className="header__nav nav">
                        <Route>
                            <Link to="/"><p className="nav__link ">Главная страница</p></Link>
                            <Link to="/os"><p className="nav__link ">Операционные системы</p></Link>
                            <Link to='/commands'><p className="nav__link nav__link--active">Справочник</p></Link>
                            {!isAuth && <Link to="/auth/login"><p className="nav__link nav__link--bordered">Войти</p></Link>}
                            
                        </Route>
                    </div>
            </div>
            <div className='commands_window'>
                <h1>Справочник по командам</h1>
                <div className='command_list'>
                    <li>
                        <code>pwd — выдать полный путь текущего каталога</code>
                    </li>
                    <li>
                        <code>mkdir  <q>имя каталога</q> — создать каталог</code>
                    </li>
                    <li>
                        <code>cd  <q>имя каталога</q> — сменить текущий каталог</code>
                    </li>
                    <li>
                        <code>cd ..  — перейти в каталог уровнем выше </code>
                    </li>
                    <li>
                        <code>cd  — перейти в домашний каталог</code>
                    </li>
                    <li>
                        <code>ls — распечатать содержимое текущего каталога</code>
                    </li>
                    <li>
                        <code>ls  <q>имя каталога</q> — распечатать содержимое заданного каталога</code>
                    </li>
                    <li>
                        <code>rm -R  <q>имя каталога</q> — удалить каталог со ВСЕМИ (опция -R или -r) подкаталогами и файлами в нем</code>
                    </li>
                    <li>
                        <code>rm  <q>имя каталога</q> — удалить файл. Удалённый файл или каталог восстановить невозможно</code>
                    </li>
                    <li>
                        <code>cp  <q>имя копируемого файла</q> <q>имя каталога в который копируем</q> — копировать файл</code>
                    </li>
                    <li>
                        <code>mv  <q>имя исходного файла</q> <q>имя каталога, в который перемещаем|имя файла, в который переименовываем</q> — переместить (переименовать) файл</code>
                    </li>
                    <li>
                        <code>cat <q>имя файла</q> —  выдать содержимое файла на консоль</code>
                    </li>
                    <li>
                        <code>more, less —  команды просмотра текста </code>
                    </li>
                    <li>
                        <code>gzip <q>имя файла</q> — сжать файл </code>
                    </li>
                    <li>
                        <code>gunzip <q>имя файла</q>.gz —  расжать файл</code>
                    </li>
                    <li>
                        <code>tar <q>опции</q> <q>имя архива</q>.tar <q>имена файлов и каталогов</q> — работа с архиватором tar </code>
                    </li>
                    <li>
                        <code>size <q>имя файла с исполняемой программой</q> — выдать размер исполняемой программы в байтах </code>
                    </li>
                    <li>
                        <code>quotacheck (добавленная команда) позволяет узнать назначенный пользователю лимит дискового пространства и текущий объем его данных на диске </code>
                    </li>
                    <li>
                        <code>du <q>опции</q> <q>имя файла или каталога</q> — оценка места на диске, занимаемого файлом или каталогом </code>
                    </li>
                    <li>
                        <code>find <q>имя каталога</q> -mtime <q>количество суток</q> — выдать имена всех файлов из <q>имя каталога</q> и его подкаталогов, которые изменялись в последние 24*(1+<q>количество суток</q>) часов </code>
                    </li>
                    <li>
                        <code>passwd — сменить пароль </code>
                    </li>
                    <li>
                        <code>uptime — получить время непрерывной работы сервера </code>
                    </li>
                    <li>
                        <code>exit — выйти из оболочки (или отключиться от машины) </code>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Commands
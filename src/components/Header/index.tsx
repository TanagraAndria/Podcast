import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { usePlayer } from '../../contexts/PlayerContext';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    const { toggleDarkMode, isDarkModeActive} = usePlayer(); 

    return (
        <header className={isDarkModeActive ? styles.headerDarkMode : styles.headerContainer}>

            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

            <button type="button" onClick={toggleDarkMode}>Dark Mode</button>
        </header>
    );
}
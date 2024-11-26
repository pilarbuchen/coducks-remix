import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../src/components/header';
import '../../../src/tailwind.css'

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
});

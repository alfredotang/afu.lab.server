import { IApiEntity, ITheme } from './api';
const theme: ITheme = {
    button: {
        color: '#239B56',
        hoverColor: '#ABEBC6',
    },
    coreLink: {
        color: '#F4D03F',
        hoverColor: '#B7950B',
    },
    paragraph: {
        color: '#F5B7B1',
        bageColor: '#EC7063',
    },
};

const Api: IApiEntity<ITheme> = {
    data: theme,
    name: 'Theme',
};

export default Api;

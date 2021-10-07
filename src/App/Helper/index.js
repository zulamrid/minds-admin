import ReceptionistIcon from './../Assets/svg/receptionist.svg';
import AdminIcon from './../Assets/svg/chrownwhite.svg';
import AdminIconPurple from './../Assets/svg/chrown.svg';

export const sidebar_en = {
    title: "AI Human",

}

export const sidebar_ko = {
    title: "관리시스템",
    admin: {
        main_title: "Admin",
        logo_url: AdminIcon,
        logo_purple: AdminIconPurple,
        child_label: [
            {
                label: 'AI Human 관리',
                title : '관리자',
                url: '#',
                id: 1
            },
            {
                label: '그룹관리',
                title : '관리자',
                url: '#',
                id: 2,
            },
        ]
    },
    receptionist: {
        main_title: "Receptionist",
        logo_url: ReceptionistIcon,
        child_label: [
            {
                label: '관리자',
                title: '관리자',
                url: '#',
                id: 3
            },
            {
                label: '시스템 관리',
                title : '시스템 상세정보',
                url: '/r.page2',
                id: 4
            },
            {
                label: '출입등록 관리',
                title : '관리자',
                url: '#',
                id: 5
            },
            {
                label: '대기화면 관리',
                title : '관리자',
                url: '#',
                id: 6
            },
            {
                label: '통계',
                title : '관리자',
                url: '#',
                id: 7
            },
        ]
    }
}

export const navbar = {
    menu: [
        {
            label: 'Receptionist',
            action: 'receptionist'
        },
        {
            label: 'Attendant',
            action: 'attendant'
        }
    ]
}

export const receptionist_body = {
    page1 : {

    },
    page2 : {
        basic : '기본 정보',
        screen : '화면 정보',
        staff : 'STAFF 관리자 정보',
        preview : '미리보기'
    }
}
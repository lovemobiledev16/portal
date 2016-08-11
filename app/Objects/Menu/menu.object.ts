export class MenuItem {
    title : string;
    url   : string;
    icon  : string;
}

export class SubMenu {
    title : string;
    url   : string;
    data  : MenuItem[];
}

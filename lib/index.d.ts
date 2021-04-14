export declare class ArrayUtils {
    static parse<T>(arr: Array<T>, f: Function, sameArray?: boolean): Array<T>;
    static forEach<T>(arr: Array<T>, f: Function): void;
    static forEachAsync<T>(arr: Array<T>, f: Function): Promise<any>;
    static getListOfNumbers(count: number, startAt?: number): Array<number>;
    static shuffle(arr: Array<any>): any[];
    static removeItem(arr: Array<any>, item: any): boolean;
    static removeItemAt(arr: Array<any>, index: number): void;
    static lastItem(arr: Array<any>): any;
    static getItemByProperty(arr: Array<any>, propertyName: string, value: any): any;
    static getUniqueValues(arr: Array<any>): Array<any>;
    static indexOf(arr: Array<any>, value: Object, subFieldName?: any, ignoreCase?: boolean): number;
    static contains(arr: Array<any>, value: Object, subFieldName?: any, ignoreCase?: boolean): boolean;
    static collectionToArray(o: any): Array<Key>;
}
export declare class MathUtils {
    static toBaseN(num: number, base?: number): string;
    private static getBaseChar;
    static nRoot(num: number, base: number): number;
}
export declare class EplEvent {
    static readonly COMPLETE: string;
    private _type;
    private _target;
    data: any;
    constructor(type: string, targetObj?: any, data?: any);
    get target(): any;
    get type(): string;
    clone(targetObj: any): EplEvent;
}
export declare class PropertyChangeEvent extends EplEvent {
    static readonly BEFORE_CHANGE: string;
    static readonly CHANGE: string;
    oldValue: any;
    newValue: any;
    propertyName: string;
    clone(targetObj: any): PropertyChangeEvent;
    constructor(type: string, obj: any);
}
export declare class EPLEventEmitter {
    mimicEvent(type: string, dispatcherObj: EPLEventEmitter): void;
    mimicEventOff(type: string, dispatcherObj: EPLEventEmitter): void;
    getEventListener(type: string, listener: Function | string, scope: any): EventListener;
    onAll(listenerFunc: Function | string, scope: any): EventListener | Array<EventListener>;
    on(type: string | Array<string>, listenerFunc: Function | string, scope: any): EventListener | Array<EventListener>;
    onOnce(type: string | Array<string>, listenerFunc: Function, scope: any): EventListener | Array<EventListener>;
    off(type: string | Array<string>, listenerFunc: Function | string, scope: any): void;
    offAll(scope?: any): void;
    emit(evt: EplEvent | string, data?: any): void;
    private _listeners;
    private _mimicHandler;
    private removeEventListener;
}
export declare class EventListener {
    type: string;
    listener: Function | string;
    scope: any;
    once: boolean;
    constructor(type: string, listener: Function | string, scope: any, once?: boolean);
}
export declare class Key extends EPLEventEmitter {
    get label(): string;
    get value(): any;
    set label(v: string);
    set value(v: any);
    private _label;
    private _value;
    toJSON(): any;
    fromJSON(o: any): void;
    constructor(label?: string, value?: any);
}
export declare class ListEvent extends EplEvent {
    static readonly ITEM_ADDED: string;
    static readonly ITEM_REMOVED: string;
    static readonly ITEMS_ADDED: string;
    static readonly REMOVE_ALL: string;
    static readonly BEFORE_REMOVE_ALL: string;
    static readonly MOVE: string;
    item: any;
    items: Array<any>;
    index: number;
    oldIndex: number;
    constructor(type: string, targetObj: any);
}
export declare class List<T> extends EPLEventEmitter {
    static readonly BREAK: string;
    static isList(obj: any): boolean;
    idFieldName: string;
    className: string;
    private _list;
    hasUniqueValues(): boolean;
    getUniqueValues(): List<T>;
    removeDuplicates(f?: (a: T, b: T) => boolean): void;
    destroy(): Promise<any>;
    toString(f?: (item: T) => string, seperator?: string, ignoreNullOrEmpty?: boolean): string;
    get last(): T;
    get first(): T;
    get random(): T;
    get length(): number;
    get count(): number;
    removeItemAt(index: number): void;
    move(item: any, index: number): void;
    pop(first?: boolean): any;
    popRange(from: number, to: number): List<T>;
    removeAll(): void;
    itemAt(index: number): T;
    find(f: (a: T, b?: number) => boolean): number;
    findSortedItem(value: string | number, getValue: (item: T, index?: number) => string | number): T;
    findItem(f: (a: T, b?: any) => boolean, data?: any): T;
    forEach(f: (a: T, b?: number) => string | void, reverse?: boolean): string;
    forEachAsync(f: (a: T, b?: number) => Promise<string> | Promise<void>, reverse?: boolean): Promise<any>;
    setItemAt(item: T, index?: number): T;
    addItemAt(item: T, index?: number): T;
    addItem(item?: T): T;
    toArray(): Array<T>;
    sort(compareFn?: (a: T, b: T) => number): void;
    /**
     * This will iterate through each values in the list and replace it with the returned value.
     * @param f
     */
    iterate(f: (a: T, b?: number) => T): void;
    filter(f: (a: T, b?: number) => boolean): void;
    addItems(items: Array<T> | List<T>): void;
    removeItem(item: T): void;
    indexOf(item: T): number;
    contains(item: T): boolean;
    lastIndexOf(item: T): number;
    getItemById(id: string, idFieldName?: string, ignoreCase?: boolean): T;
    toJSON(recursive?: boolean): any;
    fromJSON<T>(arr: Array<T>): any;
    itemFactory: Function;
    get list(): Array<T>;
    constructor(list?: List<T> | Array<T>);
}
export declare class Utils {
    static orEquals(str: string, ...arr: Array<string>): boolean;
    static removeNullProperties(o: any): any;
    static toAsync(f: Function): Promise<any>;
    static copyToClipboard(text: string): void;
    static getClipboard(): Promise<string>;
    static getValue(obj: any, path: string | Array<string>, defaultValue?: any): any;
    static getInheritencePath(obj: any, separator?: string): string;
    static typeof(obj: any): string;
    static toJSON(obj: any, recursive?: boolean): any;
    static fromJSON<T>(json: any, obj?: T): T;
    static mixin(...objs: any[]): any;
    static clone(obj: any): any;
    static getProperties(obj: any): string[];
}
export declare class StringSearch {
    constructor(content: string, contentBeginsWith: string, contentEndsWith?: string, caseSensitive?: Boolean);
    get index(): number;
    get indexEnd(): number;
    get indexInnerStart(): number;
    get indexInnerEnd(): number;
    get result(): string;
    get innerResult(): string;
    content: string;
    contentBeginsWith: string;
    contentEndsWith: string;
    caseSensitive: Boolean;
    searchNext(): number;
    search(indexOffset?: number): number;
    private _index;
    private _indexOffset;
    private _indexEnd;
    private _indexInnerStart;
    private _indexInnerEnd;
    private _result;
    private _innerResult;
    private _resetResults;
}
export declare class StringUtils {
    constructor();
    static forEach(str: string, f: (char: string, i: number) => void): void;
    static toArray(str: any): Array<string>;
    static clip(str: string, length: number, threePoints?: boolean): string;
    static toTitleCase(str: string): string;
    static toSentenceCase(str: string): string;
    static startsWith(str: string, subString: string, caseSensitive?: boolean): boolean;
    static endsWith(str: string, subString: string, caseSensitive?: boolean): boolean;
    static obfuscate(str: string, reverse?: boolean, extendedChars?: boolean): string;
    private static uniqueCtr;
    static randomString(length: number, unique?: boolean): string;
    static startCtrVariablesAt(str: string, startAt: number): string;
    static Format(str: string, values: Array<any>): string;
    static splitAt(str: string, index: number): Array<string>;
    static indexOfMany(text: string, arr: Array<string>): number;
    static isPostalCode(str: string): Boolean;
    static charIsAnumber(char: string): Boolean;
    static charIsALetter(char: string): Boolean;
    static validateMask(str: string, mask: string): Boolean;
    static applyMask(str: string, mask: string): string;
    static toBool(str: string): boolean;
    static getValue(str: string): any;
    static simplifyIndexOf(str1: string, str2: string): number;
    static simplifyIsEqual(str1: string, str2: string): Boolean;
    static isNullOrEmpty(str: string): Boolean;
    static spacePadding(str: string, length: number, left?: Boolean, spaceChar?: string): string;
    static spaceOffset(str: string, length: number, left?: Boolean, spaceChar?: string): string;
    static simplify(str: string): string;
    static removeExtraSpaces(str: string, leadingSpaces?: Boolean, endingSpaces?: Boolean, doubleSpaces?: Boolean): string;
    static replaceVariables(str: string, variables: Object, caseSensitive?: Boolean): string;
    static removeFrenchChars(str: string): string;
    static indexOf(str: string, find: string, position?: number, caseSensitivte?: boolean, ignoreFrenchChars?: boolean): number;
    static toOneLine(str: string, divider?: string): string;
    static replace(str: string, find: string | Array<string>, replaceWith: string, caseSensitive?: Boolean, recursive?: Boolean): string;
    static textFileToLines(str: string): Array<string>;
    static allIndexesOf(str: string, searchString: string): Array<number>;
    static parse(search: StringSearch, innerResultOnly: Boolean, f: Function): string;
    static split(str: string, delimeter: string, caseSensitive?: Boolean): Array<string>;
    static spitStrings(arrStr: Array<string>, delimeter: string, caseSensitive?: Boolean): Array<string>;
    static splitWithMultipleDelimeter(str: string, delimeters: Array<string>, caseSensitive?: Boolean): Array<string>;
    static trim(input: string): string;
    static insert(str: string, insertStr: string, index: number, before?: boolean): string;
}
export declare class DateDuration {
    constructor(d1: Date, d2: Date);
    days: number;
    daysTotal: number;
    months: number;
    monthsTotal: number;
    weeksTotal: number;
    years: number;
    run(date1: Date, date2: Date): void;
}
export declare class DatePeriod {
    constructor(from?: Date, to?: Date);
    private _from;
    private _to;
    get from(): Date;
    get duration(): DateDuration;
    get to(): Date;
    containsDate(date: Date): number;
    toString(): String;
}
export declare class DateUtils {
    constructor();
    private static _monthsNames;
    private static _weeksDescriptions;
    private static _daysNames;
    private static _arrMonthsDayCount;
    static timeToString(t: number): string;
    static removeHours(date: Date, count: number): Date;
    static addHours(date: Date, count: number): Date;
    static addDays(date: Date, count: number): Date;
    static removeDays(date: Date, count: number): Date;
    static isDate(obj: any): boolean;
    static toString(date?: Date, includeTime?: boolean, utc?: boolean): string;
    static toFormattedString(date?: Date, format?: string, language?: string): string;
    static isBeforeToday(date: Date): Boolean;
    static stringToDate(str: string, utc?: boolean): Date;
    static isToday(date: Date): Boolean;
    static stringToDateSlashDelimited(str: string): Date;
    static getClosestMonth(date: Date): Date;
    static getDayByName(dayName: string): number;
    static getNextDay(date: Date, dayName: string): Date;
    static getLastDay(date: Date, dayName: string): Date;
    static getClosestYearDividableBy(date: Date, m: number): Date;
    static isLeapYear(year: number): Boolean;
    static getDurationBetweenDates(d1: Date, d2: Date): DateDuration;
    static getDaysInMonth(date: Date): number;
    static periodOverlapTest(period1: DatePeriod, period2: DatePeriod): number;
    static getYesterday(): Date;
    static getTomorrow(): Date;
    static compareDates(dateOne: Date, dateTwo: Date): number;
    static isDayInDateRange(date: Date, startDate: Date, endDate: Date): Boolean;
    static isTimeInDateRange(date: Date, startDate: Date, endDate: Date): Boolean;
    static isSameDay(dateOne: Date, dateTwo: Date): Boolean;
}
export declare class NodeType {
    static readonly ELEMENT_NODE: number;
    static readonly ATTRIBUTE_NODE: number;
    static readonly TEXT_NODE: number;
    static readonly CDATA_SECTION_NODE: number;
    static readonly ENTITY_REFERENCE_NODE: number;
    static readonly ENTITY_NODE: number;
    static readonly PROCESSING_INSTRUCTION_NODE: number;
    static readonly COMMENT_NODE: number;
    static readonly DOCUMENT_NODE: number;
    static readonly DOCUMENT_TYPE_NODE: number;
    static readonly DOCUMENT_FRAGMENT_NODE: number;
    static readonly NOTATION_NODE: number;
}
export declare class DOMUtils {
    static scrollToTop(): void;
    static appendHTML(element: HTMLElement, html: string): HTMLElement;
    static getChildNodes(node: Node): Array<Node>;
    static getNodesByName(node: Node, name: string): Array<Node>;
    static firstChildNode(node: XMLDocument): Node;
    static getNodeByName(node: Node, name: string, recursive?: boolean): Node;
    static getList(node: Node, nodeName: string, f: Function, list?: List<any>): List<any>;
    static getText(node: Node, nodeName?: string): string;
    static getBool(node: Node, nodeName: string): boolean;
    static getInt(node: Node, nodeName: string): number;
    static getFloat(node: Node, nodeName: string): number;
    static XmlStringToObj(XmlString: string): any;
    static nodeToObj(node: Node): any;
}
export declare class URLUtils {
    static addPaths(basePath: string, subFolderPath: string): string;
    static objToForm(obj: any): string;
    static objToURIParams(obj: any): string;
    static URIParamsToObj(path: string): any;
    static pathToLocation(path: string): URLLocation;
    static relativeToFullPath(path: string, defaultPath: string): string;
}
export declare class URLLocation {
    get host(): string;
    domains: Array<string>;
    fullPath: string;
    subPath: string;
    tld: string;
    protocol: string;
    port: string;
    vars: string;
}
//# sourceMappingURL=index.d.ts.map
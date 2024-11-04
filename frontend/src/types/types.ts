interface IHero {
    _id: string;
    nickname: string;
    real_name: string;
    origin_description: string;
    superpowers: [];
    catch_phrase?: string;
    images?: [];
}

export default IHero;

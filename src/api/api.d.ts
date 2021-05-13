export interface IApiEntity<T> {
  data: T;
  name: string;
}

export interface ITheme {
  coreLink: {
    color: string;
    hoverColor: string;
  };
  button: {
    color: string;
    hoverColor: string;
  };
  paragraph: {
    color: string;
    bageColor: string;
  };
}

declare namespace API {
  export interface ApiResultEntity<T> {
    Status: string;

    Data: T;

    ErrorMessage: string;

    TimeStamp: Date;
  }

  interface ListResultEntity<T> {
    List: T[];
    PageCount: number;
    TotalCount: number;
  }
  interface MasterSlaveListEntity<TMaster, TSlave> {
    Master: TMaster;
    SlaveList: TSlave[];
  }
}

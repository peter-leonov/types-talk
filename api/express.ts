export type Request = {
  params: {
    id: number;
  };
};

export type Response<Body> = {
  send: (body: Body) => any;
};

export type Handler<Body> = (req: Request, res: Response<Body>) => any;

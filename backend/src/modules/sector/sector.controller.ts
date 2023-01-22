import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import sectorService from "./sector.service";

const sectorController = {
  create: async (req: Request, res: Response) => {
    const newSector = await sectorService.create(req.body);
    return res.status(200).send(responseData(newSector, req));
  },
  get: async (req: Request, res: Response) => {
    const categories = await sectorService.get();
    return res.send(responseData(categories, req));
  },
  getById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const Sector = await sectorService.getById(id);
    return res.send(responseData(Sector, req));
  },
  updateById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedSector = await sectorService.updateById(id, req.body);
    return res.send(responseData(updatedSector, req));
  },
  deleteById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedSector = await sectorService.deleteById(id);
    return res.send(responseData(deletedSector, req));
  },
};

export default sectorController;

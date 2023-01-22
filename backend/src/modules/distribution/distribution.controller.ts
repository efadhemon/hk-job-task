import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import distributionService from "./distribution.service";

const distributionController = {
  create: async (req: Request, res: Response) => {
    const newDistribution = await distributionService.create(req.body);
    return res.status(200).send(responseData(newDistribution, req));
  },
  get: async (req: Request, res: Response) => {
    const distributions = await distributionService.get();
    return res.send(responseData(distributions, req));
  },
  getById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const distribution = await distributionService.getById(id);
    return res.send(responseData(distribution, req));
  },
  updateById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedDistribution = await distributionService.updateById(
      id,
      req.body
    );
    return res.send(responseData(updatedDistribution, req));
  },
  deleteById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedDistribution = await distributionService.deleteById(id);
    return res.send(responseData(deletedDistribution, req));
  },
};

export default distributionController;

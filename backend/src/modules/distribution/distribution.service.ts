import IDistribution from "./distribution.interface";
import Distribution from "./distribution.model";

const distributionService = {
  create: async (distribution: IDistribution) => {
    return Distribution.create(distribution);
  },
  get: async () => {
    return Distribution.find({}).populate(["sectors"]);
  },
  getById: async (id: string) => {
    return Distribution.findById(id).populate(["sectors"]);
  },
  updateById: async (id: string, data: any) => {
    return Distribution.findByIdAndUpdate(id, data, { new: true });
  },
  deleteById: async (id: string) => {
    return Distribution.findByIdAndDelete(id);
  },
};

export default distributionService;

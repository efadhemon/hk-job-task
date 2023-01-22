import IDistribution from "./distribution.interface";
import Distribution from "./distribution.model";

const distributionService = {
  create: async (distribution: IDistribution) => {
    return Distribution.create(distribution);
  },
  get: async () => {
    return Distribution.find({}).populate(["user", "sector"]);
  },
  getById: async (id: string) => {
    return Distribution.findById(id).populate(["user", "sector"]);
  },
  updateById: async (id: string, data: any) => {
    return Distribution.findByIdAndUpdate(id, data, { new: true });
  },
  deleteById: async (id: string) => {
    return Distribution.findByIdAndDelete(id);
  },
};

export default distributionService;

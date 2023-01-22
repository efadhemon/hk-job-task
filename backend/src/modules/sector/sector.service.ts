import ISector from "./sector.interface";
import Sector from "./sector.model";

const sectorService = {
  create: async (sector: ISector) => {
    return Sector.create(sector);
  },
  get: async () => {
    return Sector.find({});
  },
  getById: async (id: string) => {
    return Sector.findById(id);
  },
  updateById: async (id: string, data: any) => {
    return Sector.findByIdAndUpdate(id, data, { new: true });
  },
  deleteById: async (id: string) => {
    return Sector.findByIdAndDelete(id);
  },
};

export default sectorService;

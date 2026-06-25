import type { MockupLayout } from "@/types";
import { DentalTemplate } from "./DentalTemplate";
import { BeautyTemplate } from "./BeautyTemplate";
import { RealEstateTemplate } from "./RealEstateTemplate";
import { FitnessTemplate } from "./FitnessTemplate";
import { SolarTemplate } from "./SolarTemplate";
import { LegalTemplate } from "./LegalTemplate";

export { MiniTemplateScaler } from "./MiniTemplateScaler";

const templates: Record<MockupLayout, React.FC> = {
  dental: DentalTemplate,
  beauty: BeautyTemplate,
  realestate: RealEstateTemplate,
  fitness: FitnessTemplate,
  solar: SolarTemplate,
  legal: LegalTemplate,
};

export function MiniSiteTemplate({ layout }: { layout: MockupLayout }) {
  const Template = templates[layout];
  return <Template />;
}

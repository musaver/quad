import { CASE_STUDIES } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CaseStudyCard } from "@/components/shared/CaseStudyCard";
import { ButtonMain } from "@/components/shared/ButtonMain";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerContainer";

export function CaseStudiesSection() {
  const studies = CASE_STUDIES.studies;
  const topRow = studies.slice(0, 2);
  const bottomRow = studies.slice(2, 4);

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-10 lg:py-20 overflow-hidden px-5 md:px-10 lg:px-0">
      <div className="flex flex-col gap-6 md:gap-10 items-center w-full">
        <SectionHeader
          title={CASE_STUDIES.title}
          subtitle={CASE_STUDIES.subtitle}
          align="center"
        />

        <div className="bg-[var(--color-section-bg)] rounded-3xl w-full lg:w-[1040px] max-w-full relative overflow-hidden">
          <div className="flex flex-col gap-2 p-2">
            <StaggerContainer className="flex flex-col md:flex-row gap-2 justify-center">
              {topRow.map((study) => (
                <StaggerItem key={study.company} className="flex-1">
                  <CaseStudyCard {...study} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <StaggerContainer className="flex flex-col md:flex-row gap-2 justify-center">
              {bottomRow.map((study) => (
                <StaggerItem key={study.company} className="flex-1">
                  <CaseStudyCard {...study} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <ButtonMain label={CASE_STUDIES.cta} variant="outline" />
      </div>
    </section>
  );
}

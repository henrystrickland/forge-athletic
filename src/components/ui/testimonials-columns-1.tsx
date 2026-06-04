import React from "react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className} style={{ overflow: "hidden" }}>
      <div
        className="testimonials-scroll flex flex-col gap-4 pb-4"
        style={{ animationDuration: `${props.duration ?? 10}s` }}
      >
        {[0, 1].map((copy) => (
          <React.Fragment key={copy}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.07] bg-[#0f0e0d] p-6 max-w-xs w-full shadow-lg shadow-black/40"
              >
                <p className="text-sm leading-relaxed text-foreground/65">{text}</p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={36}
                    height={36}
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground/90 leading-tight">
                      {name}
                    </span>
                    <span className="text-[11px] text-foreground/40 tracking-wide leading-tight mt-0.5">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

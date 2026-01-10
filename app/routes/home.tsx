import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

const title = "Home";
const description = "Home page";

export default function Home() {
  return (
    <main className="max-w-prose px-4 pt-4">
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <h1 className="mb-2 text-2xl font-semibold tracking-tight">Home</h1>
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic praesentium eum nostrum atque
        magnam, modi, est ut cumque iste, voluptate animi ipsum. Accusamus dolorem eos nesciunt
        labore culpa animi consequatur.
      </p>

      <Fieldset>
        <FieldsetLegend>Fieldset legend</FieldsetLegend>
        <Field>
          <FieldLabel>Email address</FieldLabel>
          <Input name="email" type="email" required />
          <FieldError>Please enter a valid email.</FieldError>
        </Field>
      </Fieldset>
    </main>
  );
}

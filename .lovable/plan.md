
## New "Income Calculator" Section (Portuguese)

### What
A new section placed right before the Pricing/Offer section that shows potential earnings selling heart cones. Title: "Como Voce Pode Ganhar Entre R$3.000 e R$5.000 Por Mes". It will feature a visual, mobile-first income calculator showing how many cones to sell at R$40 profit each to reach income targets.

### Design Concept (Mobile-First)
- Gradient background (rose/pink tones matching the brand)
- Bold headline with emoji accents
- Interactive-looking calculation cards showing 3 tiers:
  - **R$1.600/mes** = ~3 vendas/dia (approx 90/mes)
  - **R$3.000/mes** = ~3 vendas/dia (approx 75/mes at R$40)
  - **R$5.000/mes** = ~5 vendas/dia (approx 125/mes)
- Each card shows: daily sales needed, monthly total, and monthly income
- A "bottom line" highlight: "Com apenas 3-5 vendas por dia voce transforma esse pack em uma renda real"
- CTA button scrolling to the offer section

### Technical Plan

1. **Create `src/components/IncomeCalculatorSection.tsx`**
   - Three visual calculator cards stacked vertically on mobile
   - Each card: icon + daily sales + monthly calculation + result in bold green
   - Uses existing brand colors and Tailwind utilities
   - Includes a scroll-to-offer CTA button

2. **Update `src/pages/Index.tsx`**
   - Import and place `<IncomeCalculatorSection />` right before `<PricingSection />`

3. **Update `src/pages/IndexX.tsx`**
   - Mirror the same placement (as per the rule to keep /x in sync)

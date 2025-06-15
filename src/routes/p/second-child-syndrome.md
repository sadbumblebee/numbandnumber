---
title: Second Child Syndrome
date: '2025-06-14'
author:
  - Daniel Wolfe
---

<script>
  import Ai2html from '$lib/components/Ai2html.svelte';
</script>

_This post has been adapted from a 2025 NICAR talk._

I’m the third of four boys. And as any younger sibling may relate: at some point we stumble across our family photo albums and realize: my older siblings each have a photo album … where’s mine? Why don’t I have one?

<img class="post-img"
alt="A film photograph of the author as a kid striking a pinata dalmation with a baseball bat. In the background other kids and the boys father watch while under an umbrella. The photograph was taken in the backyard of the home."
src="/posts/second-child-syndrome/pinata.jpg"
/>

Such are the diminishing returns in the novelty of having kids: forgetting to document them.

But I am a father of two kids now! Surely, I wouldn’t do the same thing. So I took a look at the data.

<Ai2html slug="second-child-syndrome" name="photo_chart" description="This line chart shows number of photos captured in the Y-Axis of my first kid over 180 days (in the X-Axis). The line shows a steady increase to 703 photos of Kid 1."></Ai2html>

Here are the total photos I took of my daughter, six months since her birth … Just over 700 photos.

<Ai2html slug="second-child-syndrome" name="photo_chart_2" description="This second line chart adds an additional line here that shows the amount of photos taken of my second child over adjusted to the same time period. In this line, we see that a total of 370 photos were taken."></Ai2html>

And here are the total photos I took of my son. It’s half that amount.

Even if we P-hack this a bit … and included photos of my daughter _with_ my son. That brings us to a modest 507 photos over 6 months.

<Ai2html slug="second-child-syndrome" name="photo_chart_3" description="In this final chart, I added the photos I took of my second kid where the first kid is also present. As I note in the text, this was an attempt to juice-up the numbers a bit. Even doing this, though, the total comes to 507 photos over 180 day time period."></Ai2html>

Does that make me bad dad?

What does it say about us when we look at the data we collect, specifically the data I collect on my children?

### Welcome to my meta analysis ...

Let’s back up a bit and talk about Data. In our practice, collecting data is part in parcel of telling a story.

My daughter was born during the pandemic, so there was a _touch_ of uncertainty. We took that uncertainty (and free time) to channeled it into our kid.

Take feeding our kid. A newborn baby feeds every two to three hours.

Terrified we’d miss a feeding, we did what any normal parent would do: we setup a database.

<img class="post-img"
alt="A diagram on how to use a nasal passage suction for removing snot from a baby."
src="/posts/second-child-syndrome/feeding_diagram.jpg"
/>


With every feeding we used our phones to input the data, an Arduino would take an average of recent feedings and display when to feed our daughter next on a magnetic eInk display we could take anywhere.

<img class="post-img"
alt="A photograph of an eInk display showing the next feeding should be 10:47 PM and the last feeding at 8:17PM."
src="/posts/second-child-syndrome/feeding_clock.jpg"
/>

This thing was amazing, it didn’t tell us the time, it told us the time to feed.

And I think it helped. Not only in gaining all this data, it soothed our fears we’d starve her.

<Ai2html slug="second-child-syndrome" name="feeding_scatter" description="This scatterplot shows in the Y-Axis time in a 24-hour day. Over 90 days, the data set are breast versus bottle feedings. This is representative of how much data was collected over the feeding of our kid. It's demonstrative of the abundance of data."></Ai2html>

Here’s every feeding down to the minute over a three month period.

Sadly the highlighted circles are bottle feedings, clearly from Mom’s first weekend away.

This informed us to get **ME** (and him) on the bottle earlier and more often.

A side note: In research for this talk, I had forgotten we even tracked the girls pee’s and poops.

<img class="post-img"
alt="A screenshot of a Google spreadsheet detailing bowel movements of a child by timestamp."
src="/posts/second-child-syndrome/poo_spreadsheet.png"
/>


So naturally when our second child was born last June, we would dust off the display and use the API again right?

Readers: We did not use the app.

<p class="timestamp">Wednesday, Dec 18 – 9:02AM</p>
<p class="chat message-from">I forgot to ask when he was last fed</p>
<p class="chat message-to">5 am<p>

We moved across the country. We changed jobs. We were raising a two year old (now three year old). And we also had experience!

Look, the baby panopticon is real. There’s no ceiling to what you can record on your kids in this cradle to surveillance state pipeline.

I mean <a href="https://www.happiestbaby.com/products/snoo-smart-bassinet" target="_blank">this thing</a> will text you if your baby’s fussing and it costs north of a grand.

At this conference we learn to collect and present data.

In my own life, I think DOING the collecting was a means to satisfy the fear. The fear of missing out, the fear of forgetting, the fear of not being a good dad.

What I think is easy to miss is how things build off one another. We change as we’re challenged with no sleep, bigger family in a struggling industry.

In the end: the kids got fed. They took poops of every hue. The data we collect is just one dimension. And while it's easy to focus on the delta, as a middle child, I'd encourage you to think of the sum of experiences instead.

<style lang="scss">
  .post-img {
    margin-bottom: 10px;
  }
  .timestamp {
    margin-top: 40px;
    font-size: .75rem;
    text-align: center;
  }
  .chat {
    width: fit-content;
    padding: 8px 18px;
    border-radius: 20px;
    &.message-from {
      margin: 0 0 0 auto;
      background-color: $beige;
    }
    &.message-to {
      background-color: $primary-light;
      text-align: left;
      margin-bottom: 45px;
    }
  }
</style>
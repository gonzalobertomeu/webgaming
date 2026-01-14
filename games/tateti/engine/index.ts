import { Wame } from "wame";
const wame = new Wame();

wame.config().api({
  "/hello": function () {
    console.log("hello");
    return Response.json({ msg: "world" });
  },
});
wame.serve();

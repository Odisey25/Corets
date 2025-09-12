import db from "../config/db";

export async function getAllUsers() {
  return db("MEMB_INFO")
    .select("memb_guid", "memb___id", "memb_name", "mail_addr", "bloc_code", "AccountLevel", "cash");
}

export async function getUserById(id: string) {
  return db("MEMB_INFO").where({ memb___id: id }).first();
}

export async function createUser(data: {
  memb___id: string;
  memb__pwd: string;
  memb_name: string;
  mail_addr?: string;
}) {
  return db("MEMB_INFO").insert({
    memb___id: data.memb___id,
    memb__pwd: data.memb__pwd,
    memb_name: data.memb_name,
    mail_addr: data.mail_addr ?? "",
    bloc_code: "0",
    ctl1_code: "0",
    AccountLevel: 0,
    cash: 0
  });
}

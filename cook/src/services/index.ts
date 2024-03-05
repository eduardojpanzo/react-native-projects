import * as recipes from "./recipesService";
import * as ingredientes from "./ingredientsService";
import * as preparations from "./preparationsService";

export const services = {
  recipes,
  ingredientes,
  preparations,

  storage: {
    imagePath:
      "https://xelrfbiyidcpnipwkjah.supabase.co/storage/v1/object/public/ ingredientes",
  },
};

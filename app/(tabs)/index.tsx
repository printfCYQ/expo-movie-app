
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { fetchMovies } from '@/services/api'
export default function index() {
  const router = useRouter();

  useEffect(() => {
    const query = async () => {
      try {
        const res = await fetchMovies({
          query: "batman",
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    query()
  }, [])

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <View className="flex-1 mt-5">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="What do you want to watch?"
          />
        </View>
      </ScrollView>
    </View>
  );
}

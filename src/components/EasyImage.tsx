import React, { useState } from "react";
import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";
import LocalImages from "../constants/LocalImages";

type ImageProps = {
  localImage?: any;
  webImage?: string | null;
  style?: StyleProp<ImageStyle> | undefined;
  blurRadius?: number;
};

const EasyImage: React.FC<ImageProps> = ({
  webImage,
  style,
  localImage,
  blurRadius = 0,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Image
      style={style || styles.default}
      source={
        loading ? LocalImages.placeHolder : localImage || { uri: webImage }
      }
      onLoadEnd={() => setLoading(false)}
      blurRadius={blurRadius}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    height: 50,
    width: 50,
    resizeMode: "stretch",
  },
});

export default EasyImage;
